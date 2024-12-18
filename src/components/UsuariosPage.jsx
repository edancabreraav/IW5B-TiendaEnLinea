import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaSortAlphaDown, FaSortAlphaUp, FaClock } from "react-icons/fa"; // Importar iconos
import { userContext } from "../context/userContext";
// Estilos para la tabla usando styled-components
const StyledTable = styled.table`
  margin: 20px auto;
  border-collapse: collapse;
  width: 85%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTh = styled.th`
  background-color: #4a90e2;
  color: white;
  padding: 10px;
  border: 1px solid #ddd;
`;

const StyledTd = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  vertical-align: middle; /* Centrar verticalmente */
`;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const SearchContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 60%;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #003366;
  }
`;

const FormContainer = styled.div`
  margin: 20px auto;
  width: 50%;
  text-align: center;
`;

const FormInput = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.color || "#003366"};
  color: white;
  border: 1px solid ${(props) => props.color || "#003366"};
  border-radius: 20px;
  cursor: pointer;
  margin: 5px 10px;

  &:hover {
    background-color: ${(props) =>
      props.color === "#FF0000"
        ? "#cc0000"
        : props.color === "#28a745"
        ? "#218838"
        : props.color === "#4a90e2"
        ? "#0056b3"
        : "#001f4d"};
  }
`;

const SortButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 5px;
  font-size: 1.2rem;
  color: #4a90e2;

  &:hover {
    color: #003366;
  }
`;

const CenteredTable = ({ data, columns, onEdit, onDelete, onSort, currentUser }) => {
  console.log(currentUser)
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>Imagen</StyledTh>
          {columns.map((col, index) =>
            col !== "profilePic" ? <StyledTh key={index}>{col}</StyledTh> : null
          )}
          <StyledTh>Acciones</StyledTh>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, index) => (
            <StyledTr key={index}>
              <StyledTd>
                <StyledImg src={row.profilePic} alt="Profile" />
              </StyledTd>
              {columns.map((col, colIndex) =>
                col !== "profilePic" ? (
                  <StyledTd key={colIndex}>{row[col]}</StyledTd>
                ) : null
              )}
              <StyledTd>
                <FormButton color="#4a90e2" onClick={() => onEdit(row)}>
                  Editar
                </FormButton>
                {data[index].email !== currentUser.email &&
                <FormButton color="#FF0000" onClick={() => onDelete(row.email)}>
                  Eliminar
                </FormButton>}
              </StyledTd>
            </StyledTr>
          ))
        ) : (
          <tr>
            <StyledTd colSpan={columns.length + 1} style={{ textAlign: "center" }}>
              No se encontraron resultados
            </StyledTd>
          </tr>
        )}
      </tbody>
    </StyledTable>
  );
};

const UsuariosPage = () => {
  const {users, setUsers, user} = useContext(userContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    role: "client", // Valor por defecto
    profilePic: "",
    createdAt: "",
  });

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const columns = ["email", "username", "password", "role", "createdAt"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        profilePic: URL.createObjectURL(file),
      }));
    }
  };

  const handleCreate = () => {
    // Verificar que el email sea único
    if (users.some((user) => user.email === formData.email)) {
      return alert("El correo electrónico ya está registrado");
    }

    if (!formData.email || !formData.username || !formData.password || !formData.role) {
      return alert("Todos los campos son obligatorios");
    }

    setUsers([
      ...users,
      { ...formData, createdAt: new Date().toISOString() },
    ]);
    resetForm();
  };

  const handleEdit = (user) => {
    setFormData(user);
  };

  const handleUpdate = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.email === formData.email ? { ...formData } : user
      )
    );
    resetForm();
  };

  const handleDelete = (email) => {
    setUsers(users.filter((user) => user.email !== email));
  };

  const handleSort = (key) => {
    const newDirection =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction: newDirection });

    const sortedUsers = [...users].sort((a, b) => {
      if (a[key] < b[key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    setUsers(sortedUsers);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resetForm = () => {
    setFormData({
      email: "",
      username: "",
      password: "",
      role: "client",
      profilePic: "",
      createdAt: "",
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Administrar Usuarios</h1>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Buscar por correo o nombre"
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchContainer>

      <FormContainer>
        <FormInput
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleInputChange}
        />
        <FormInput
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={formData.username}
          onChange={handleInputChange}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleInputChange}
        >
          <option value="client">Cliente</option>
          <option value="admin">Administrador</option>
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <FormButton color="#28a745" onClick={handleCreate}>Crear</FormButton>
        <FormButton color="#4a90e2" onClick={handleUpdate}>Actualizar</FormButton>
      </FormContainer>

      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <SortButton onClick={() => handleSort("email")}>
          <FaSortAlphaDown /> Ordenar por email
        </SortButton>
        <SortButton onClick={() => handleSort("createdAt")}>
          <FaClock /> Ordenar por Fecha
        </SortButton>
      </div>

      <CenteredTable
        currentUser={user}
        data={filteredUsers}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default UsuariosPage;

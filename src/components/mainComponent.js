
import React, { useEffect } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { getUsers, userState, addUser, editUser, deleteUser } = props;
  const [editData, setEditData] = React.useState(null);

  const handleSubmit = ({ name, email }) => {
    addUser({ name, email }).then(() => {
      getUsers();
    });
  };

  const handleEdit = (id, updatedUser) => {
    editUser(id, updatedUser).then(() => {
      getUsers();
      setEditData(null); // Clear edit mode after successful edit
    });
  };

  const handleDelete = (id) => {
    deleteUser(id).then(() => {
      getUsers();
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="main-container-wrapper">
      <InputHandler onSubmit={handleSubmit} />
      <SimpleTable
        dataSource={userState.users}
        onEdit={(id, data) => setEditData({ id, ...data })}
        onDelete={handleDelete}
      />
      {editData && (
        <InputHandler
          onSubmit={(data) => handleEdit(editData.id, data)}
          editMode={true}
          initialData={editData}
        />
      )}
    </div>
  );
}

export default MainComponent;

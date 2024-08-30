import React, { useState } from "react";
import { Form } from "react-bootstrap";

const CitySearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (searchQuery.trim() === "") return;
    onSearch(searchQuery); 
    setSearchQuery(""); 
  };

  return (
    <Form onSubmit={handleSearch}>
      <Form.Group>
        <Form.Control
          type="search"
          placeholder="Cerca una città"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default CitySearch;
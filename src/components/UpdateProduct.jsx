import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import Swal from "sweetalert2"

export default function UpdateProduct({ product, fetchData }) {
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [showEdit, setShowEdit] = useState(false)

  const openEdit = () => {
    setShowEdit(true)
  }

  const closeEdit = () => {
    setShowEdit(false)
  }

  const updateProduct = (e) => {
    e.preventDefault()
    fetch(`http://localhost:4002/b2/products/${product}/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
         name: name,
         description: description,
         price: price
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Product updated successfully") {
          Swal.fire({
            title: "Success!",
            icon: "success",
            text: "Product Successfully updated",
          })
        } else {
          Swal.fire({
            title: "Error!",
            icon: "error",
            text: "Please try again",
          })
        }
        fetchData()
        closeEdit()
      })
  }

  return (
    <>
      <Button variant="primary" size="sm" onClick={openEdit}>
        Update
      </Button>

      <Modal id="update-modal" show={showEdit} onHide={closeEdit}>
        <Form onSubmit={updateProduct}>
          <Modal.Header closeButton>
            <Modal.Title>Update Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="productName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeEdit}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

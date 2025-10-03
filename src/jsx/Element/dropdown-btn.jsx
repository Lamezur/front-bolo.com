import { Form } from "react-bootstrap";

function DropdownBtn() {
  return (
    <>
      <div className="dz-dropdown">
        <Form.Select as="ul" className="custom-btn">
          <option>Last 2 Months</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </Form.Select>
      </div>
    </>
  );
}
export default DropdownBtn;

import axios from "axios";
import FormData from "form-data";
import { createReadStream } from "fs";

const formData = new FormData();
formData.append("file", createReadStream("package.json"));

const response = await axios.post("http://localhost:4000/body", formData);

console.log(response.data);

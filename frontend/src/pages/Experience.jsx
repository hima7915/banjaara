import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import "./experience.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Tags from "../components/Tags";

function Experience() {
  const [content, setContent] = useState("");
  const FileUploader = () => {
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const range = Quill.import("quill/blots/selection").Range;
      const quill = window.editor.getEditor(); // Get the Quill instance
      const cursorPosition = quill.getSelection().index;
      quill.insertEmbed(cursorPosition, "attachment", file);
      quill.setSelection(cursorPosition + 1, range.DIRECTION.ALL);
    };

    return <input type="file" onChange={handleFileChange} />;
  };

  const handleContentChange = (newContent) => {
    // setContent(newContent);
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        ["link", "image", "video", "attachment"],
        ["code-block"],
        [{ script: "sub" }, { script: "super" }],
        ["clean"],
        ["attachment"],
      ],
      handlers: {
        attachment: () => {
          const input = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", ".pdf,.doc,.docx"); // Specify allowed file extensions
          input.click();
          input.onchange = () => {
            const file = input.files[0];
            const range = window.editor.getEditor().getSelection(true);
            const reader = new FileReader();
            reader.onload = (e) => {
              const fileInfo = {
                src: e.target.result,
                name: file.name,
              };
              window.editor
                .getEditor()
                .clipboard.dangerouslyPasteHTML(
                  range.index,
                  `<a href="${fileInfo.src}" download="${fileInfo.name}">${fileInfo.name}</a>`,
                  "api"
                );
            };
            reader.readAsDataURL(file);
          };
        },
      },
    },
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <>
      <NavBar />
      <form>
        <div className="exp">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="title inptxt"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="inptxt"
          />
          {/* <input
            type="text"
            name="country"
            placeholder="Country"
            className="inptxt"
          /> */}
          <input
            type="number"
            name="days"
            placeholder="Days"
            className="inptxt"
          />
          <input
            type="number"
            name="budget"
            placeholder="Budget"
            className="inptxt"
          />
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            id="exp"
            name="experience"
            modules={modules}
            placeholder="Share your experience here..."
            // theme="snow" // Set the theme to "snow" (or your desired theme)
            // formats={["javascript", "html"]} // Specify additional code formats
            // theme={customTheme} // Pass the custom theme object
            className="exptxt"
          />
          <FileUploader />
          {/* <textarea
            
          ></textarea> */}
        </div>
        <Tags />
        <button type="submit" className="submitb">
          <p className="submit">Submit!</p>
        </button>
      </form>
      <Footer />
    </>
  );
}

export default Experience;

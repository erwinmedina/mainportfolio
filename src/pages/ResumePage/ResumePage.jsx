import { Document, Page } from "react-pdf";

export default function ResumePage() {
    return (
        <div className="resumePage">
            <Document
                file="./ErwinResume.pdf"
            >
                <Page />
            </Document>
        </div>
    )
}
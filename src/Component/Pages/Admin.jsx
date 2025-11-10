import axios from "axios";
import React from "react";
import { environment } from "../../environment/environment";

const Admin = () => {
  const downloadCsv = async () => {
    try {
      const response = await axios.get(
        `${environment.API_BASE_URL}/download/organic_farmer_table_payment`,
        {
          headers: {
            "Content-Type": "text/csv; charset=UTF-8",
          },
          responseType: "blob",
        }
      );
      console.log("response: ", response);

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "organic_farmer_table_payment.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Failed to download the file:", error);
      alert("An error occurred while downloading the file.");
    }
  };

  return (
    <div className="admin">
      <div className="container">
        <div className="row">
          <div className="admin-page col-lg-12 col-md-12 d-flex justify-content-center align-items-center">
            <div className="text-center track-formsd shadow px-4 py-4">
              <p className="fs-1 my-3 fw-bold track-text mb-3">Admin</p>
              <div className="d-flex justify-content-center mt-4">
                <button
                  onClick={downloadCsv}
                  type="button"
                  className="track-button text-white px-5 py-2 border rounded-pill"
                >
                  Download Excel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

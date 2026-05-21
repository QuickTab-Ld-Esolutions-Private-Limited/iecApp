import { useState } from "react";
import { useNavigate } from "react-router-dom";

/** styles */
import "./Form.scss";

/** interfaces */
import type { IRegistrationForm } from "../../../interface/common";
import { toast } from "react-toastify";

const IecRenewalForm = () => {
  const [formData, setFormData] = useState<IRegistrationForm>({
    businessName: "",
    businessType: "",
    businessDescription: "",
    businessActivity: "",
    incorporationDate: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    branch: "",
    pan: "",
    email: "",
    mobile: "",
    sez: "no",
  });

  const [formLoading, setFormLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Response Data:", formData);

    navigate("/thank");

    return formData;

    try {
      setFormLoading(true);
      // const response = await fetch(
      //   "https://webhook.eudyogaadhar.co.in/api/receive-form.php",
      //   {
      //     method: "POST",
      //     body: JSON.stringify(formData),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   },
      // );

      // const data = await response.json();

      // console.log("Response Data:", data);

      // if (!data.success) {
      //   toast.error(data.message);
      //   return;
      // }

      // toast.success(data.message);

      // // Reset form
      // setFormData({
      //   businessName: "",
      //   businessType: "",
      //   businessDescription: "",
      //   businessActivity: "",
      //   incorporationDate: "",
      //   addressLine1: "",
      //   addressLine2: "",
      //   city: "",
      //   state: "",
      //   pincode: "",
      //   branch: "",
      //   pan: "",
      //   email: "",
      //   mobile: "",
      //   sez: "no",
      // });

      // setFormLoading(false);

      // return data;
    } catch (error) {
      console.error("Real Error:", error);
      toast.error("Something went wrong, please try again");
      throw new Error("Request failed", { cause: error });
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <section className="content-wrapper registration-wrapper" id="iecForm">
      {/* LEFT COLUMN: FORM */}
      <div className="form-section">
        <div className="section-header form-header">
          <h2>IEC Renewal Form</h2>
        </div>

        <div className="section-body">
          <form className="registration-form" onSubmit={handleFormSubmit}>
            {/* Business Name */}
            <div className="form-group">
              <label>
                Business Name <span className="required">*</span>
              </label>

              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Business Name"
                required
              />
            </div>

            {/* Constitution */}
            <div className="form-group">
              <label>
                Business Type <span className="required">*</span>
              </label>

              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
              >
                <option value="">Select Business Type</option>
                <option value="proprietorship">Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="llp">LLP</option>
                <option value="pvt_ltd">Private Limited</option>
              </select>
            </div>

            {/* Description */}
            <div className="form-group">
              <label>Description</label>

              <textarea
                name="businessDescription"
                value={formData.businessDescription}
                onChange={handleChange}
              />
            </div>

            {/* Business Activity */}
            <div className="form-group">
              <label>
                Business Activity <span className="required">*</span>
              </label>

              <select
                name="businessActivity"
                value={formData.businessActivity}
                onChange={handleChange}
                required
              >
                <option value="">Select Business Activity</option>
                <option value="merchant_exporter">Merchant Exporter</option>

                <option value="manufacturer_exporter">
                  Manufacturer Exporter
                </option>

                <option value="service_provider">Service Provider</option>
              </select>
            </div>

            {/* Incorporation Date */}
            <div className="form-group">
              <label>Date of Incorporation</label>

              <input
                type="date"
                name="incorporationDate"
                value={formData.incorporationDate}
                onChange={handleChange}
              />
            </div>

            {/* Address */}
            <div className="form-group address-group">
              <label>Address</label>

              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                placeholder="Address Line 1"
                required
              />

              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                placeholder="Address Line 2"
              />

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />

              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>

                {/* Union Territories */}

                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>

                <option value="Chandigarh">Chandigarh</option>

                <option value="Dadra and Nagar Haveli and Daman and Diu">
                  Dadra and Nagar Haveli and Daman and Diu
                </option>

                <option value="Delhi">Delhi</option>

                <option value="Jammu and Kashmir">Jammu and Kashmir</option>

                <option value="Ladakh">Ladakh</option>

                <option value="Lakshadweep">Lakshadweep</option>

                <option value="Puducherry">Puducherry</option>
              </select>

              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Pincode"
              />
            </div>

            {/* Branch */}
            <div className="form-group">
              <label>Do You Have Branch?</label>

              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* PAN */}
            <div className="form-group">
              <label>
                PAN Number <span className="required">*</span>
              </label>

              <input
                type="text"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
                placeholder="PAN Number"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>
                Email <span className="required">*</span>
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>

            {/* Mobile */}
            <div className="form-group">
              <label>
                Mobile <span className="required">*</span>
              </label>

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile"
                required
              />
            </div>

            {/* SEZ */}
            <div className="form-group radio-group">
              <label>SEZ</label>

              <div className="radio-options">
                <label>
                  <input
                    type="radio"
                    name="sez"
                    value="yes"
                    checked={formData.sez === "yes"}
                    onChange={handleChange}
                  />
                  Yes
                </label>

                <label>
                  <input
                    type="radio"
                    name="sez"
                    value="no"
                    checked={formData.sez === "no"}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>

            <div className="declaration">
              <p>
                I hereby declare that the information provided in the online
                registration form is true to the best of my knowledge and I
                accept terms, disclaimer, and policies by clicking "Submit"
                button.
              </p>
            </div>

            <button type="submit" className="submit-btn">
              {formLoading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT COLUMN: INSTRUCTIONS */}
      <div className="instructions-section">
        <div className="section-header instructions-header">
          <h2>Instructions</h2>
        </div>

        <div className="section-body instructions-body">
          <ol>
            <li>
              <strong>Name of Business Entity :</strong> Fill the Business
              Entity which will get printed on IEC Certificate.
            </li>
            <li>
              <strong>Type of Business :</strong> Select business type of the
              applicant in which name IEC requires to apply.
            </li>
            <li>
              <strong>Description of Business :</strong> Fill the name of
              Business / Enterprise which will get printed on IEC Certificate.
            </li>
            <li>
              <strong>Business Activity :</strong> Select main business activity
              to be conducted.
            </li>
            <li>
              <strong>Date of Incorporation / Date of Birth :</strong> Select
              your Date of Incorporation / Date of Birth.
            </li>
            <li>
              <strong>Owner's Residence Address (Same as Above) :</strong> Fill
              complete residential address of business owner.
            </li>
            <li>
              <strong>Have Any Branch :</strong> Do You Have Any Branch?
            </li>
            <li>
              <strong>PAN of Entity :</strong> Fill the correct PAN Number of
              Business Entity.
            </li>
            <li>
              <strong>E-Mail ID :</strong> Fill the correct Email ID of
              Applicant.
            </li>
            <li>
              <strong>Mobile No :</strong> Fill the correct Mobile Number of
              Applicant.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default IecRenewalForm;

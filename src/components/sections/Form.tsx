import "./Form.scss";

const RegistrationForm = () => {
  return (
    <section className="content-wrapper registration-wrapper" id="iecForm">
      {/* LEFT COLUMN: FORM */}
      <div className="form-section">
        <div className="section-header form-header">
          <h2>Registration Form</h2>
        </div>

        <div className="section-body">
          <h3 className="section-title">APPLICANT DETAILS</h3>

          <form
            className="registration-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <label>
                1. Application Type (आवेदन का प्रकार)
                <span className="required">*</span>
              </label>
              <select required>
                <option value="">Please Select</option>
                <option value="registration">IEC Registration</option>
                <option value="modification">IEC Modification</option>
                <option value="renewal">IEC Cancellation</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                2. Name of Business Entity (बिजनेस एंटिटी का नाम)
                <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Name of Business Entity"
                required
              />
            </div>

            <div className="form-group">
              <label>
                3. Constitution of Business (व्यापार का संविधान)
                <span className="required">*</span>
              </label>
              <select required>
                <option value="">Please Select Constitution of Business</option>
                <option value="proprietorship">Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="llp">LLP</option>
                <option value="pvt_ltd">Private Limited</option>
              </select>
            </div>

            <div className="form-group">
              <label>4. Description of Business (व्यापार का वर्णन)</label>
              <textarea></textarea>
            </div>

            <div className="form-group">
              <label>
                5. Business Activity (व्यावसायिक गतिविधि)
                <span className="required">*</span>
              </label>
              <select required defaultValue="merchant_exporter">
                <option value="merchant_exporter">Merchant Exporter</option>
                <option value="manufacturer_exporter">
                  Manufacturer Exporter
                </option>
                <option value="service_provider">Service Provider</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                6. Date of Incorporation / Date of Birth (DD-MM-YYYY)
              </label>
              <input type="date" />
            </div>

            <div className="form-group address-group">
              <label>
                7. Principal Place of Business Entity (बिजनेस एंटिटी का प्रमुख
                स्थान)
              </label>
              <input type="text" placeholder="Address Line 1 *" required />
              <input type="text" placeholder="Address Line 2" />
              <input type="text" placeholder="City" />
              <div className="address-row">
                <select required>
                  <option value="">Select State *</option>
                  <option value="jharkhand">Jharkhand</option>
                  {/* Add more states */}
                </select>
              </div>
              <input type="text" placeholder="Pincode *" required />
            </div>

            <div className="form-group">
              <label>
                8. Do You Have Any Branch (क्या आपकी कोई शाखा है)
                <span className="required">*</span>
              </label>
              <select required>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                9. PAN No. of Entity (इकाई का पैन नंबर)
                <span className="required">*</span>
              </label>
              <input type="text" placeholder="Enter PAN No." required />
            </div>

            <div className="form-group">
              <label>
                10. E-Mail ID (ईमेल आईडी)<span className="required">*</span>
              </label>
              <input type="email" placeholder="E-Mail ID" required />
            </div>

            <div className="form-group">
              <label>
                11. Contact No. (संपर्क संख्या)
                <span className="required">*</span>
              </label>
              <input type="tel" placeholder="Mobile No" required />
            </div>

            <div className="form-group radio-group">
              <label>
                Whether the firm is located in Special Economic Zone (SEZ)
              </label>
              <div className="radio-options">
                <label>
                  <input type="radio" name="sez" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="sez" value="no" defaultChecked /> No
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
              SUBMIT
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
              <strong>Requirement :</strong> Select New if you require a fresh
              IEC Code. Select Modify if you need changes in existing IEC Code.
            </li>
            <li>
              <strong>Name of Business Entity :</strong> Fill the Business
              Entity which will get printed on IEC Certificate.
            </li>
            <li>
              <strong>Constitution of Business :</strong> Select business type
              of the applicant in which name IEC requires to apply.
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

export default RegistrationForm;

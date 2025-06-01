
const ContactForm = () => {
    return (
        <div style={{
            display: "flex",
            width: "100%",
            height: "100vh",
            fontFamily: "Arial, sans-serif"
        }}>
            {/* Lewa część z obrazkiem i tekstem */}
            <div style={{
                flex: 1,
                backgroundColor: "#3aafe7",
                color: "white",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
            }}>
                <h2 style={{ fontWeight: "normal", fontSize: "2rem", textAlign: "center", marginBottom: "3rem" }}>
                    get in <br /> touch
                </h2>
                <img
                    src="/mnt/data/df546fb2-64dd-4eeb-936a-c7914263e566.png"
                    alt="Woman with phone"
                    style={{ width: "220px", marginBottom: "2rem", objectFit: "contain" }}
                />
                <div style={{ fontSize: "0.8rem", textAlign: "center", lineHeight: "1.5" }}>
                    <p>contact@e-comm.ng</p>
                    <p>+234 4556 6665 34</p>
                    <p>20 Prince Hakerem Lekki<br />Phase 1, Lagos.</p>
                </div>
                {/* Ta półokrągła "wycięta" część po prawej stronie */}
                <div style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "50px",
                    height: "150px",
                    backgroundColor: "#ffffff",
                    borderRadius: "0 100% 100% 0"
                }} />
            </div>

            {/* Prawa część formularza */}
            <div style={{
                flex: 1,
                backgroundColor: "#fff",
                padding: "3rem 4rem",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1.5rem"
            }}>
                <label style={{ fontSize: "0.8rem", fontWeight: "600" }}>Fullname</label>
                <input
                    type="text"
                    defaultValue="James Doe"
                    style={{
                        padding: "0.75rem",
                        fontSize: "1rem",
                        border: "1px solid #3aafe7",
                        borderRadius: "4px",
                        outlineColor: "#3aafe7"
                    }}
                />

                <label style={{ fontSize: "0.8rem", fontWeight: "600" }}>Email</label>
                <input
                    type="email"
                    placeholder="jamesdoe@gmail.com"
                    style={{
                        padding: "0.75rem",
                        fontSize: "1rem",
                        border: "1px solid #aaa",
                        borderRadius: "4px",
                        outlineColor: "#3aafe7"
                    }}
                />

                <label style={{ fontSize: "0.8rem", fontWeight: "600" }}>Message</label>
                <textarea
                    placeholder="Type your message"
                    rows={6}
                    style={{
                        padding: "0.75rem",
                        fontSize: "1rem",
                        border: "1px solid #aaa",
                        borderRadius: "4px",
                        outlineColor: "#3aafe7",
                        resize: "vertical"
                    }}
                />
            </div>
        </div>
    );
};

export default ContactForm;

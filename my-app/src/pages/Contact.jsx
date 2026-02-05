import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/pages/Contact.css";
import { FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      mensaje: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, "Debe tener al menos 3 caracteres")
        .required("El nombre es obligatorio"),
      email: Yup.string()
        .email("Correo inválido")
        .required("El email es obligatorio"),
      mensaje: Yup.string()
        .min(10, "Debe tener al menos 10 caracteres")
        .required("El mensaje es obligatorio"),
    }),
    onSubmit: (values, { resetForm, setStatus }) => {
      setStatus("Mensaje enviado correctamente ✅");
      resetForm();
      setTimeout(() => setStatus(""), 3000);
    },
  });

  return (
    <main className="contact-container">

      {/*  REDES + COMENTARIOS */}

      <aside className="left-side">

        {/* Redes sociales */}

        <div className="contact-social">
          <h3>Seguinos 🔥</h3>

          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="social-icon" />
            <span>Facebook</span>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="social-icon" />
            <span>Instagram</span>
          </a>

          <a href="https://twitch.tv" target="_blank" rel="noreferrer">
            <FaTwitch className="social-icon" />
            <span>Twitch</span>
          </a>
        </div>

        {/* Comentarios */}

        <div className="reviews-box">
          <h3 className="reviews-title">Opiniones de nuestros clientes ⭐</h3>

          <div className="review">
            <p className="stars">★★★★★</p>
            <p>“Excelente”</p>
          </div>

          <div className="review">
            <p className="stars">★★★★☆</p>
            <p>“Muy rapido a la hora de enviarte el codigo en el caso de ps.”</p>
          </div>

          <div className="review">
            <p className="stars">★★★★★</p>
            <p>“La mejor tienda gamer, precios increíbles.”</p>
          </div>

          <div className="review">
            <p className="stars">★★★★★</p>
            <p>“Atención de 10, me ayudaron a elegir el adecuado para mis hijos.”</p>
          </div>

          <div className="review">
            <p className="stars">★★★★☆</p>
            <p>“Los ultimos lanzamientos a tiempo .”</p>
          </div>
        </div>
      </aside>


      {/* FORMULARIO  */}

      <section className="contact-form-box small-box">
        <h2>Contacto 📩</h2>

        <form onSubmit={formik.handleSubmit} className="contact-form">
          
          {/* Nombre */}

          <div className="input-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nombre}
              placeholder="Tu nombre"
            />

            <span className="validacion">
              {formik.touched.nombre && formik.errors.nombre
                ? "❌"
                : formik.values.nombre
                ? "✔️"
                : ""}
            </span>

            {formik.touched.nombre && formik.errors.nombre && (
              <div className="error">{formik.errors.nombre}</div>
            )}
          </div>

          {/* Email */}

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="tucorreo@gmail.com"
            />

            <span className="validacion">
              {formik.touched.email && formik.errors.email
                ? "❌"
                : formik.values.email
                ? "✔️"
                : ""}
            </span>

            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>

          {/* Mensaje */}
          
          <div className="input-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mensaje}
              placeholder="Escribí tu mensaje..."
            ></textarea>

            <span className="validacion">
              {formik.touched.mensaje && formik.errors.mensaje
                ? "❌"
                : formik.values.mensaje
                ? "✔️"
                : ""}
            </span>

            {formik.touched.mensaje && formik.errors.mensaje && (
              <div className="error">{formik.errors.mensaje}</div>
            )}
          </div>

          <button type="submit">Enviar</button>

          {formik.status && <div className="success">{formik.status}</div>}
        </form>
      </section>
    </main>
  );
};

export default Contact;

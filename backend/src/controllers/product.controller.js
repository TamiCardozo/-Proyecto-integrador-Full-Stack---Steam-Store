export const getProducts = async (req, res) => {
  res.json([
    {
      id: 1,
      title: "Cyberpunk 2077",
      price: 59.99,
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
      discount: 20,
      is_new: false
    },
    {
      id: 2,
      title: "Elden Ring",
      price: 69.99,
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
      discount: 0,
      is_new: true
    },
    {
      id: 3,
      title: "Red Dead Redemption 2",
      price: 49.99,
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
      discount: 30,
      is_new: false
    }
  ]);
};


// Para Crear producto (SIMULACIÓN)
export const createProduct = async (req, res) => {
  const { title, price, image } = req.body;

  try {
    await pool.query(
      "INSERT INTO products (title, price, image) VALUES (?, ?, ?)",
      [title, price, image]
    );

    res.status(201).json({ message: "Producto creado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear producto" });
  }
};
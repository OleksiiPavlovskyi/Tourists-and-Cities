import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 3000;

app.get("/city/:name", async (req, res) => {
  const cityName = req.params.name;
  const wikiUrl = `https://en.wikipedia.org/wiki/${cityName}`;

  try {
    const { data } = await axios.get(wikiUrl);
    const $ = cheerio.load(data);

    let description = $("p").first().text().trim();

    // Якщо перший параграф занадто короткий або пустий, беремо наступний
    if (!description || description.length < 50) {
      description = $("p").eq(1).text().trim();
    }

    // Видаляємо посилання виду [1], [2], [citation needed]
    description = description.replace(/\[\d+\]/g, "").trim();

    const country = $("th:contains('Country') + td").text().trim();
    let imageUrl = $(".infobox img").first().attr("src");

    if (imageUrl) {
      imageUrl = `https:${imageUrl.replace(/\/thumb\//, "/").replace(/\/\d+px-.+$/, "")}`;
    }

    res.json({
      city: cityName,
      country: country || "Unknown",
      description: description || "No description available.",
      image: imageUrl || null,
    });
  } catch {
    res.status(500).json({ error: "Не вдалося отримати дані." });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер працює на порту ${PORT}`);
});

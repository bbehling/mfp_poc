export default function handler(req, res) {
  return res.status(200).json({
    id: 0,
    name: "banana",
    calories: 10,
    macro: "fiber",
    micro: "potassium",
    image: "https://en.wikipedia.org/wiki/Banana_equivalent_dose#/media/File:Banana-Single.jpg",
  });
}

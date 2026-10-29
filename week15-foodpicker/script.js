const menus = [
  {
    name: "ผัดไทยกุ้งสด",
    category: "อาหารไทย",
    description:
      "เส้นจันท์ผัดซอสมะขามเข้มข้น หอมกลิ่นกระเทียมเจียว เสิร์ฟพร้อมกุ้งสดตัวโต ถั่วลิสงบด และมะนาวสด",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "ราเมนโชยุ",
    category: "อาหารญี่ปุ่น",
    description:
      "เส้นราเมนเหนียวนุ่มในน้ำซุปโชยุกลมกล่อม ใส่หมูชาชูชิ้นหนา ไข่ยางมะตูม และสาหร่ายนอริ",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "พิซซ่าเปปเปอโรนี",
    category: "อาหารอิตาลี",
    description:
      "แป้งพิซซ่าโฮมเมดอบกรอบขอบหนานุ่ม ราดซอสมะเขือเทศหอมสมุนไพร และชีสโมซซาเรลลายืดเต็มคำ",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "ซูชิรวมมิตร",
    category: "อาหารญี่ปุ่น",
    description:
      "ข้าวซูชิปรุงรสพอดีคำ วางด้วยปลาแซลมอน มากุโร และกุ้งสด สดใหม่ทุกวัน พร้อมวาซาบิและโชยุ",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "ชีสเบอร์เกอร์เนื้อ",
    category: "อาหารอเมริกัน",
    description:
      "เนื้อวัวบดย่างชิ้นหนานุ่มสไตล์ smashed ประกบชีสเชดดาร์ละลายและผักสด ในซอสเบอร์เกอร์สูตรพิเศษ",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "ต้มยำกุ้งน้ำข้น",
    category: "อาหารไทย",
    description:
      "น้ำต้มยำกลมกล่อมเผ็ดเปรี้ยวพอดีคำ ใส่กุ้งสด เห็ดฟาง ข่า ตะไคร้ และใบมะกรูด หอมเครื่องสมุนไพรครบ",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=900&q=80"
  }
];

const foodImage = document.getElementById("foodImage");
const foodName = document.getElementById("foodName");
const foodDesc = document.getElementById("foodDesc");
const foodPrice = document.getElementById("foodPrice");
const foodBadge = document.getElementById("foodBadge");
const foodTotal = document.getElementById("foodTotal");
const cardContent = document.getElementById("cardContent");
const randomBtn = document.getElementById("randomBtn");

let currentIndex = -1;

foodTotal.textContent = menus.length;

function formatPrice(price) {
  return "฿" + price.toLocaleString("th-TH");
}

function renderMenu(menu, index) {
  foodImage.src = menu.image;
  foodImage.alt = menu.name;
  foodName.textContent = menu.name;
  foodDesc.textContent = menu.description;
  foodPrice.textContent = formatPrice(menu.price);
  foodBadge.textContent = menu.category;
  currentIndex = index;
}

function getRandomIndex() {
  if (menus.length < 2) {
    return 0;
  }

  let index;
  do {
    index = Math.floor(Math.random() * menus.length);
  } while (index === currentIndex);

  return index;
}

function randomize() {
  if (randomBtn.classList.contains("is-rolling")) {
    return;
  }

  randomBtn.classList.add("is-rolling");
  cardContent.classList.add("is-changing");
  foodImage.classList.add("is-changing");

  window.setTimeout(() => {
    const index = getRandomIndex();
    renderMenu(menus[index], index);
    cardContent.classList.remove("is-changing");
    foodImage.classList.remove("is-changing");
  }, 260);

  window.setTimeout(() => {
    randomBtn.classList.remove("is-rolling");
  }, 700);
}

menus.forEach((menu) => {
  const img = new Image();
  img.src = menu.image;
});

const startIndex = Math.floor(Math.random() * menus.length);
renderMenu(menus[startIndex], startIndex);

randomBtn.addEventListener("click", randomize);

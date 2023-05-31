const data=[
    {
        image : "food1.jpg",
        title : "Momo",
        rating: "Half 30/- Full 60/-",
        description: "Momo is a type of East and South Asian steamed filled dumpling, Momo are native to Southwest Chinese region of Tibet, Bhutan, Nepal. It is similar to Chinese baozi, jiaozi, and mantou, Mongolian buuz, Japanese gyoza, Korean mandu and Turkic manti, but heavily influenced by cuisine of the South Asian Spices and herbs.",
    },
    {
        image : "food2.jpg",
        title : "Massala Maggie",
        rating: "Half 50/- Full 80/-",
        description: "Maggi is an international brand of seasonings, instant soups, and noodles that originated in Switzerland in the late 19th century. The Maggi company was acquired by Nestlé in 1947. Maggi.",
    },
    {
        image : "food3.jpg",
        title : "Biryani",
        rating: "Half 120/- Full 240/-",
        description: "biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.",
    },
    {
        image : "food4.jpg",
        title : "Spring Roll",
        rating: "Half 60/- Full 120/-",
        description: "A spring roll is a Chinese food consisting of a small roll of thin pastry filled with vegetables and sometimes meat, and then fried.",
    },
    {
        image : "food5.jpg",
        title : "Chicken Soup",
        rating: "Half 80/- Full 130/-",
        description: "Chicken soup is a soup made from chicken, simmered in water, usually with various other ingredients. The classic chicken soup consists of a clear chicken broth, often with pieces of chicken or vegetables; common additions are pasta, noodles, dumplings, or grains such as rice and barley.",
    },
    {
        image : "food6.jpg",
        title : "Chicken Pakoda",
        rating: "Half 80/- Full 160/-",
        description: "Chicken Pakora (Chicken Pakoda) is a popular Indian snack where boneless chicken pieces are marinated with spices, ginger garlic paste, and lime juice and then coated with chickpea flour, rice flour, cornstarch, and egg.",
    },
]

const foodBox = document.getElementById("show_food");


data.forEach((el) => {
    const div1 = document.createElement("div");
    const image1 = document.createElement("img");
    image1.src = el.image;

    const foodTitle = document.createElement("h3");
    foodTitle.innerText = el.title;

    const rating = document.createElement("p");
    rating.innerText = el.rating;


    const description1 = document.createElement("p");
    description1.innerText="";

    const textarea=document.createElement("p");


    const button = document.createElement("button");
    button.innerText = "show Description";
    button.addEventListener('click',() => {
        textarea.innerText=el.description;
        textarea.append(description1);
        
    });
    const button1 = document.createElement("button");
    button1.innerText = "Hide Description";
    button1.addEventListener('click',() => {
        textarea.innerText="";
    });
    div1.append(image1, foodTitle, rating, button, button1 , textarea);
    foodBox.append(div1);
})

/*data.forEach((el) => {
    <div>
        <textarea name="" id="content" cols="30" rows="10"></textarea>
        <button id="clickable1">Click me to show</button>
        <button id="clickable2">Click me to not show</button>
    </div>
    const button1 = document.getElementById("clickable1");
    const button2 = document.getElementById("clickable2");
    const textarea = document.getElementById("content");

    button1.addEventListener("click", ()=>{
        textarea.innerText=`${el.description}`;
    })

    button2.addEventListener("click", ()=>{
        textarea.innerText="";
    })
})*/
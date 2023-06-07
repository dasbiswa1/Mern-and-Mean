import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';

function App() {
  const arr = [
    {
      prize:"Rs.4,999/-",
      profile :"https://5.imimg.com/data5/ZS/TK/PQ/SELLER-13488977/naviforce-9110-1000x1000.jpg",
      name :"Naviforce",
      offer :"60% off",
      id:1
    },
    {
      prize:"Rs.3,295/-",
      profile :"https://staticimg.titan.co.in/Fastrack/Catalog/3278SL01_1.jpg?impolicy=pqlow&imwidth=640",
      name :"Fastrack",
      offer :"25% off",
      id:2
    },
    {
      prize:"Rs.8,000/-",
      profile :"https://staticimg.titan.co.in/Titan/Catalog/1713BM02_1.jpg?impolicy=pqmed&imwidth=640",
      name :"Titan",
      offer :"60% off",
      id:3
    },
    {
      prize:"Rs.10,000/-",
      profile :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0g3avM1KIJ5ipxBI-qHmyDc6Tm19aANr1CphSe-jxwg&usqp=CAU&ec=48600113",
      name :"Omga",
      offer :"53% off",
      id:4
    },
    {
      prize:"Rs.2,271/-",
      profile :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4w9MFQu7tjV0FXK8UP9KoinsQWE4xyQiWqryT0Q_HA&usqp=CAU&ec=48600113",
      name :"Rolex",
      offer :"35% off",
      id:5
    },
    {
      prize:"Rs.11,200/-",
      profile :"https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Blancpain-Fifty-Fathoms-Tech-Gombessa-2.jpg?v=1677096207",
      name :"Blancpain",
      offer :"70% off",
      id:6
    }
  ]

  return (
  <div className="App">
    <Navbar/>
    <div className="cont">
      {arr.map((el) => {
        return (
          <Card username = {el.name} image={el.profile} prizes={el.prize} off={el.offer}/>
        );
      //   <Card
      // username = "Biswaranjan Das"
      // image = {
      //   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lion_d%27Afrique.jpg/1879px-Lion_d%27Afrique.jpg"
      // }/>
      })}
    </div>
  </div>
  );
}

export default App;

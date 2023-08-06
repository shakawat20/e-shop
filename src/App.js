import logo from './logo.svg';
import './App.css';
import ProductForm from './components/productForm/ProductForm';
import Header from './components/header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import ProductInfo from './components/productInfo/ProductInfo';


function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<ProductForm></ProductForm>}/>
        <Route path='/info' element={<ProductInfo></ProductInfo>}/>

      </Routes>
    
      {/* <ProductInfo></ProductInfo> */}
    </div>
  );
}

export default App;

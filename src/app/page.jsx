"use client"
import Greetings from "./Greetings";
import List from "./List";
import ProductList from "./ProductList";
import ProfileCard from './ProfileCard';
import { useState } from "react";
import TaskItem from "./TaskItem";
import ProductCard from "./ProductCard";
import Product from "./Products";

export default function Home() {
  const data = { title: "Welcome to Next JS", description: "Learn Next Js with ease!" }
  // const Products = [
  //   { id: 1, name: "Laptop", price: 1000 },
  //   { id: 2, name: "PC", price: 10000 },
  //   { id: 3, name: "Mouse", price: 500 }
  // ]
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Make todo list in Next JS" },
    { id: 3, name: "Deploy on Vercel" }
  ])

  const onDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const [product, setProduct] = useState([
    { id: 1, name: "Apple", price: 200, category: "Fruits" },
    { id: 2, name: "Banana", price: 250, category: "Fruits" },
    { id: 3, name: "Guavava", price: 300, category: "Fruits" }
  ])

  return (
    <div>
      <Greetings name={"John"} />
      <Greetings name={"Doe"} />
      <List name={"Affan"} age={20} />
      {/* <ProductList products={Products} /> */}
      <ProfileCard name={"Affan"} Subscription="free" />
      <ProfileCard name={"Talha"} Subscription="Premium" />
      <ProfileCard name={"Rafay"} Subscription="VIP" />
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} />
        ))}
      </ul>
      <ul>
        {product.map(product => (
          <ProductCard key={product.id} product={product} owner="Affan" />
        ))}
      </ul>
      <Product />
    </div>
  )
}

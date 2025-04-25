 import { Tasks } from "./Tasks";
 import { Header } from "./assets/components/Header";

 

 import './global.css';

 import styles from './App.module.css';


export function App() {
  

  return (
    <div>
      <main>
      < Header 
      />

    < Tasks 
    content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
    />
    < Tasks 
    content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." 
    />
    < Tasks 
    content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." 
    />
    < Tasks 
    content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
     />
    < Tasks 
    content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." 
  
    />

</main>
    </div>
 
  )
}



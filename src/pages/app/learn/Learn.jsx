import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
// Task4: Import all the required elements from the react-router-dom;
import { useParams,Link,Outlet,NavLink } from "react-router-dom";

function Learn() {
  const param = useParams();
  const dataId = param.id;
  const courses = coursesData.find((data)=>data.id===dataId);
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <Link to="/courses"><h2 className={style.back}>{"<<"}</h2></Link>
        

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{courses.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapt ers</h1>
          <hr />
          <ul>{/*Task4: List of Chapters must be rendered here  */}
          {courses.chapters.map((course,id)=>{
            return(<div className={style.dataId} key={id}>
              <NavLink style={({isActive})=>isActive?{color:"orange"}:null} to={`chapter/${course.chapter}`}>
              {course.title}
              </NavLink>
              
              
              </div>)
          })}
          </ul>
        </div>
      
      <div className={style.courses}>
        {/**Task5:  Chapter Details Must be rendered here */}
          <Outlet context={{...courses}}/>
      </div>
    </div>
</div>
  );
}

export default Learn;

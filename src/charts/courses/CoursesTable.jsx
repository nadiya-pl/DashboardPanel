import { Edit, Search, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import './CoursesTable.css';


export const courses = [
  { id: 1, name: "React Fundamentals", category: "Frontend", price: 49.99, students: 340, sales: 950 },
  { id: 2, name: "ASP.NET Core API", category: "Backend", price: 59.99, students: 220, sales: 760 },
  { id: 3, name: "Docker & Kubernetes", category: "DevOps", price: 79.99, students: 180, sales: 520 },
  { id: 4, name: "SQL for Developers", category: "Database", price: 39.99, students: 410, sales: 1130 },
  { id: 5, name: "JavaScript Algorithms", category: "Core JS", price: 44.99, students: 370, sales: 870 },
  { id: 6, name: "HTML & CSS Mastery", category: "Frontend", price: 29.99, students: 460, sales: 980 },
  { id: 7, name: "TypeScript in Depth", category: "Frontend", price: 54.99, students: 280, sales: 610 },
  { id: 8, name: "MongoDB Essentials", category: "Database", price: 41.99, students: 190, sales: 500 },
  { id: 9, name: "Git & GitHub Crash Course", category: "Tools", price: 24.99, students: 600, sales: 1050 },
  { id: 10, name: "Node.js API Development", category: "Backend", price: 64.99, students: 310, sales: 830 },
  { id: 11, name: "C# Basics", category: "Programming", price: 39.99, students: 240, sales: 670 },
  { id: 12, name: "Agile & Scrum Foundations", category: "Management", price: 34.99, students: 390, sales: 700 },
  { id: 13, name: "Python for Beginners", category: "Programming", price: 29.99, students: 720, sales: 1200 },
  { id: 14, name: "Next.js Advanced", category: "Frontend", price: 69.99, students: 150, sales: 390 },
  { id: 15, name: "System Design Essentials", category: "Architecture", price: 84.99, students: 170, sales: 440 },
  { id: 16, name: "CI/CD with GitHub Actions", category: "DevOps", price: 47.99, students: 200, sales: 580 },
  { id: 17, name: "PostgreSQL for Apps", category: "Database", price: 36.99, students: 265, sales: 690 },
  { id: 18, name: "Figma for Developers", category: "Design", price: 25.99, students: 380, sales: 860 },
  { id: 19, name: "Web Security Basics", category: "Security", price: 44.99, students: 210, sales: 540 },
  { id: 20, name: "Unit Testing in JavaScript", category: "Testing", price: 39.99, students: 270, sales: 620 },
  { id: 21, name: "Azure Fundamentals", category: "Cloud", price: 59.99, students: 130, sales: 330 },
  { id: 22, name: "Flutter for Web & Mobile", category: "Mobile", price: 69.99, students: 300, sales: 770 },
  { id: 23, name: "Data Structures in JS", category: "Core JS", price: 49.99, students: 280, sales: 720 },
  { id: 24, name: "Clean Code Principles", category: "Best Practices", price: 45.99, students: 250, sales: 610 },
  { id: 25, name: "Design Patterns in C#", category: "Backend", price: 66.99, students: 160, sales: 400 },
  { id: 26, name: "Responsive Web Design", category: "Frontend", price: 33.99, students: 420, sales: 990 },
  { id: 27, name: "Java Basics", category: "Programming", price: 39.99, students: 310, sales: 730 },
  { id: 28, name: "Kotlin for Android", category: "Mobile", price: 59.99, students: 230, sales: 560 },
  { id: 29, name: "Linux Command Line", category: "Tools", price: 27.99, students: 470, sales: 890 },
  { id: 30, name: "GraphQL Crash Course", category: "Backend", price: 51.99, students: 190, sales: 510 },
];


function CoursesTable() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    console.log(keyword);
    setSearchKeyword(keyword);
    const filtered = courses.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword)
    );
    setFilteredCourses(filtered);
  };

  return (
  <div className="chart-container">
    <div className="table-header">
      <h2 className="table-title">Course List</h2>
      <div className="table-search">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          placeholder="Search courses..."
          className="search-input"
          onChange={handleSearch}
          value={searchKeyword}
        />
      </div>
    </div>

    <div className="table-wrapper">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Category</th>
            <th>Price</th>
            <th>Students</th>
            <th>Sales</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course) => (
            <tr key={course.id}>
              <td className="text-cell">{course.name}</td>
              <td className="text-cell">{course.category}</td>
              <td className="text-cell">${course.price.toFixed(2)}</td>
              <td className="text-cell">{course.students}</td>
              <td className="text-cell">{course.sales}</td>
              <td>
                <button className="edit-btn"> <Edit size={18} /> </button>
                <button className="delete-btn"> <Trash2 size={18} /> </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>
);
}

export default CoursesTable
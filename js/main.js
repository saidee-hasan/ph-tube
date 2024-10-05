// fetch category function 

// crate load categories
const loadCategory = async()=>{
try {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await res.json();
    displayCategory(data.categories)

    
} catch (error) {
    console.error('Error:', error);
}
    
}
const displayCategory =(data)=>{
    console.log(data)


}



loadCategory()
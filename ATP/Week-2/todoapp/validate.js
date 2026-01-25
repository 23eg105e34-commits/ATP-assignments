 // 1. Validate task title (not empty, min 3 chars)
 function validateTitle(title) {
  if(title.length===0)
  {
    return "Title is Empty"
  }
  if(title.length<3)
  {
    return "Title should have more than 3 chars"
  }
  return true
 }
                      
 //Validate priority (must be: low, medium, high)
function validatePriority(priority) 
{
    if(priority==='low'||priority==='medium'||priority==='high')
    {
        return true
    }
    return false
}
//Validate due date (must be future date)
function validateDueDate(date) 
{
    let duedate=new Date(date)
    let currentDate=new Date()
    return duedate>currentDate
}
export{validateTitle,validatePriority,validateDueDate};

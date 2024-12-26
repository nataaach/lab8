
const formData = {
    email: '',
    message: '',
  };
  
  const form = document.querySelector('.feedback-form');
  const STORAGE_KEY = 'feedback-form-state';

  window.addEventListener('DOMContentLoaded', () => {
    //зчитуємо дані з local storage
    const savedData = localStorage.getItem(STORAGE_KEY);
  // якщо дані знайдені,то додаємо їх в об'єкт 
      if (savedData) {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email || '';
      formData.message = parsedData.message || '';
  
      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    }
  });
  
  form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value.trim(); 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
  });
  

  form.addEventListener('submit', event => {
    event.preventDefault();
  
    const { email, message } = formData;
  

    if (!email || !message) {
      alert('Fill please all fields');
      return;
    }

    console.log('Submitted data:', formData);
  

    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
  });
  
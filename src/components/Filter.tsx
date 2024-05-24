import React, { useState } from 'react';
import { Form, FormControl, FormCheck, CloseButton } from 'react-bootstrap';

const categories = ['Whole Bean', 'Ground', 'Starbucks Reserve'];
const roasts = ['Blonde', 'Medium', 'Dark'];
const caffeineLevels = ['Decaf', 'Regular'];

const Filter: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRoasts, setSelectedRoasts] = useState<string[]>([]);
  const [selectedCaffeineLevels, setSelectedCaffeineLevels] = useState<string[]>([]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value;
    const newSelectedCategories = [...selectedCategories];
    if (event.target.checked) {
      newSelectedCategories.push(category);
    } else {
      const index = newSelectedCategories.indexOf(category);
      newSelectedCategories.splice(index, 1);
    }
    setSelectedCategories(newSelectedCategories);
    // You can implement logic to filter data based on selected categories here
  };

  const handleRoastChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const roast = event.target.value;
    const newSelectedRoasts = [...selectedRoasts];
    if (event.target.checked) {
      newSelectedRoasts.push(roast);
    } else {
      const index = newSelectedRoasts.indexOf(roast);
      newSelectedRoasts.splice(index, 1);
    }
    setSelectedRoasts(newSelectedRoasts);
    // You can implement logic to filter data based on selected roasts here
  };

  const handleCaffeineLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const caffeineLevel = event.target.value;
    const newSelectedCaffeineLevels = [...selectedCaffeineLevels];
    if (event.target.checked) {
      newSelectedCaffeineLevels.push(caffeineLevel);
    } else {
      const index = newSelectedCaffeineLevels.indexOf(caffeineLevel);
      newSelectedCaffeineLevels.splice(index, 1);
    }
    setSelectedCaffeineLevels(newSelectedCaffeineLevels);
    // You can implement logic to filter data based on selected caffeine levels here
  };

  return (
    <div className="filter-container" >
        <h5>Filters</h5>
      
   <button className=' rounded-5 ' style={{ color: 'green' }}>
   <CloseButton className=' p-2 ' style={{ color: 'green' }} /> Clear
   </button>

       
      <Form>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Category</Form.Label>
          {categories.map((category) => (
            <FormCheck
              key={category}
              type="checkbox"
              label={category}
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={handleCategoryChange}
            />
          ))}
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Roast</Form.Label>
          {roasts.map((roast) => (
            <FormCheck
              key={roast}
              type="checkbox"
              label={roast}
              value={roast}
              checked={selectedRoasts.includes(roast)}
              onChange={handleRoastChange}
            />
          ))}
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Caffeine Level</Form.Label>
          {caffeineLevels.map((caffeineLevel) => (
            <FormCheck
              key={caffeineLevel}
              type="checkbox"
              label={caffeineLevel}
              value={caffeineLevel}
              checked={selectedCaffeineLevels.includes(caffeineLevel)}
              onChange={handleCaffeineLevelChange}
            />
          ))}
        </Form.Group>
      </Form>
    </div>
  );
};

export default Filter;

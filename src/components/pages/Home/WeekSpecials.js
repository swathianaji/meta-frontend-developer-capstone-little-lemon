import { Link } from 'react-router-dom';
import mangoLassiImage from './assets/mango-lassi.jpeg';
import garlicNaanImage from './assets/garlic-naan.jpeg';
import butterChickenImage from './assets/butter-chicken.jpeg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Butter Chicken',
    image: butterChickenImage,
    price: '$14.99',
    description: `Butter chicken is an Indian dish, a type of curry made from chicken with a spiced tomato and butter (makhan) sauce.`,
  },
  {
    name: 'Garlic Naan',
    image: garlicNaanImage,
    price: '$5.99',
    description: `Garlic Naan Breads are so soft and perfect for mopping up curries, you'll find it hard to stop at one! A reader favourite naan recipe!`,
  },
  {
    name: 'Mango Lassi',
    image: mangoLassiImage,
    price: '$5.00',
    description: `Mango lassi is a creamy yogurt-based drink from India made with mango, some milk, a little sugar, and a bit of cardamom.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>Indian specials today!</h2>
        <Link className="button-primary button-primary-specials" to={pages.get('home').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) =>
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;

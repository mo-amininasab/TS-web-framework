import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {
  console.log('CHANGE #1');
  
});
user.on('change', () => {
  console.log('CHANGE #2');
  
});
user.on('good', () => {
  console.log('GOOD');
  
});

user.trigger('good')


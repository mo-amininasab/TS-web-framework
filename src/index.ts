import {User} from './models/User'

const user = new User({name: 'new recod', age: 999});

// user.set({name: 'NEW NAME', age: 32})

user.events.on('change', () => {
  console.log('CHANGED!');
  
})

user.events.trigger('change')
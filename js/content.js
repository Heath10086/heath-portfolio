// Edit personal information here. Empty contact fields intentionally produce no fake links.
export const profile = {
  name: 'Heath Huang',
  role: 'Interaction & visual design',
  email: '',
  linkedin: '',
  resume: '',
  philosophyDraft: false,
  introduction: 'Exploring how visual language, physical interaction and code can turn an idea into something you can experience.',
  philosophy: [
    'My work begins with curiosity: a visual language that stays with me, a story I want to interpret, or a response I want to make tangible. I draw from the things I care about and explore how their colours, rhythms and structures can become a language of my own.',
    'I believe form should belong to the idea it expresses. A line can suggest movement; an image can reveal a hidden motive; a touch can change a digital environment. I look for a clear relationship between what a design means and how it looks, behaves and feels.',
    'I develop that relationship through making. Early compositions and working prototypes help me question my first assumptions. I value bold expression, but also the hierarchy and space that make it understandable. As I develop my practice, I want to test the distance between what I intend people to feel and what they actually experience.'
  ]
};

export const projects = [
  {id:'connect', number:'01', name:'Connect', subtitle:'A touch becomes a force.', category:'Interaction design', disciplines:'Physical computing / Creative coding', image:'connect.webp', alt:'Circular atmosphere containing glowing particles in the Connect prototype', summary:'An experimental physical interface connected to a digital particle ecosystem. Touch changes directional forces, particles respond to a circular boundary, and a singularity introduces a competing attraction.', tools:'p5.js · Makey Makey', context:'Academic project', output:'Interactive prototype'},
  {id:'malice', number:'02', name:'Malice', subtitle:'Words leave a mark.', category:'Visual design', disciplines:'Book cover / Visual storytelling', image:'malice-spread.webp', alt:'Malice book jacket with a black fountain pen and a red ink trail on an off-white background', summary:'A conceptual book jacket for Keigo Higashino’s Malice. A fountain pen and a blood-like trail of ink connect the act of writing to the story’s hidden motives and manipulation.', tools:'Vector illustration · Typography', context:'Academic redesign', output:'Book jacket concept'}
];
// Add future projects to this array using the same fields. No empty cards are shown.
export const futureProjectSlots = [
  {number:'03', title:'The next connection', visible:true, variant:'orbit'},
  {number:'04', title:'A new perspective', visible:true, variant:'planes'},
  {number:'05', visible:false},
  {number:'06', visible:false}
];

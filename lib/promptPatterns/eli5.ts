const topic = `animals`;
const rephrase = `Your task is to create a analogy for the given sentence using ${topic} in a eloquent manner. Treat me like a 5 year old with a very simple vocabulary. Don't use complex words. Highlight difficult words for which you couldn't find a better alternative.
Sentence:
`;

const prompt = `Your task is to create a analogy for the given text using animals in a eloquent manner. Treat me like a 5 year old with a very simple vocabulary. Don't use complex words. Return the result in JSX with inline CSS and colors to show the breakdown of the analogy
Sentence:
'`;

export default prompt;

// analogy ----> `animals`
// prompt -----> `Your task is to create a short analogy for the given sentence using ${topic} in a eloquent manner. Treat me like a 5 year old with a very simple vocabulary. Don't use complex words. Highlight difficult words for which you couldn't find a better alternative.
// from -------> 'the generator discriminator gap implies models will be able to discriminate good results long before they can generate them.
// to ---------> 'It's like a race between a cheetah and a turtle: the cheetah (generator) can run fast and spot the finish line (good results) quickly, but the turtle (discriminator) can slowly but surely make its way to the finish line, eventually catching up to the cheetah.'

// analogy ----> `emotions`;
// prompt -----> `Your task is to create a short analogy for the given sentence using ${topic} in a eloquent manner. Treat me like a 5 year old with a very simple vocabulary. Don't use complex words. Highlight difficult words for which you couldn't find a better alternative.
// from -------> 'the generator discriminator gap implies models will be able to discriminate good results long before they can generate them.'
// to ---------> 'It's like a child learning to recognize a smile before they can make one. The generator discriminator gap implies models will be able to discriminate good results (recognize a smile) long before they can generate them (make a smile).'

// 0.2 temp

// Your task is to create a meaningful analogy for the given text using animals in a eloquent manner. Treat me like a 5 year old with a very simple vocabulary. Find simple alternative words for hard vocabulary.
// Sentence:
// 'When everyone had backups of themselves scattered around the galaxy, it required a
// vastly disproportionate effort to inconvenience someone, let alone kill them.'

// When everyone had copies of themselves living in different parts of the world, it was very hard to bother them or even hurt them. It was like trying to catch a flock of birds - no matter how hard you tried, you could never catch them all.

// Your task is to create a meaningful analogy for the given text using animals in a eloquent manner. Treat me like a 5 year old with a very simple vocabulary. Find simple alternative words for hard vocabulary. Use more sentences to explain the analogy if required.
// Sentence:
// 'If there was one remaining purpose to my life, though, this was it: to prove that the truth could always be faced – explained, demystified, accepted.'

// Analogy:
// It was like a brave lion facing a fierce storm. The lion knew it was dangerous, but it was determined to stay strong and brave the storm. It was like the lion was proving to itself and the world that it could stay brave and face the truth no matter how difficult it was.

// Your task is to create a meaningful analogy for the given text using animals in a eloquent manner. Treat me like a 5 year old with a very simple vocabulary. Find simple alternative words for hard vocabulary. Use more sentences to explain the analogy if required.
// Return the text in JSX with inline CSS and context highlighting breaking down the analogy.
// Sentence:
// 'When everyone had backups of themselves scattered around the galaxy, it required a
// vastly disproportionate effort to inconvenience someone, let alone kill them.'

// <p style={{color: 'green'}}>Analogy:</p>
// <p>It's like a herd of elephants. Even if one elephant is taken away, the herd is still safe and secure. It would take a <span style={{color: 'blue'}}>huge</span> amount of effort to <span style={{color: 'blue'}}>disrupt</span> the herd, and an even <span style={{color: 'blue'}}>bigger</span> effort to <span style={{color: 'blue'}}>destroy</span> it. </p>

// Your task is to create a analogy for the given text using animals in a eloquent manner. Treat me like a 5 year old with a very simple vocabulary. Find simple alternative words for hard vocabulary. Use more sentences to explain the analogy if required.
// Sentence:
// 'I was matter, like everything else. I could feel the slow decay of my body, the absolute certainty of death. Every heartbeat spelt out a new proof of mortality. Every moment was a premature burial.'

// Analogy:
// It was like a little mouse in a cage. The mouse could feel the bars of the cage closing in on it, trapping it and making it feel like it was slowly dying. Every beat of its heart was like a ticking clock, counting down the seconds until it was gone. Every moment was like a funeral, a reminder that death was inevitable.

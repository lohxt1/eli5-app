const eli5Prompt = `Original prompt - Generate random text.
Your task is to create a short analogy for the given sentence using animals in a eloquent manner. Explain like a 5 year old. Don't use complex words. Highlight difficult words for which you couldn't find a better alternative. Use brackets for reference. Show the result in the form of JSX with inline CSS.

Begin.

Question: The generator discriminator gap implies models will be able to discriminate good results long before they can generate them.
Analogy:
^^^
<div>
<p>
  It's like a race between a{" "}
  <span style="font-weight:bold">cheetah</span> and a{" "}
  <span style="font-weight:bold">turtle</span>. The cheetah (
  <span style="font-style:italic">generator</span>) can run really
  fast, but the turtle (
  <span style="font-style:italic">discriminator</span>) can tell
  which way to go much faster. So the turtle (
  <span style="font-style:italic">discriminator</span>) will reach
  the finish line (
  <span style="font-style:italic">good results</span>) before the
  cheetah (<span style="font-style:italic">generator</span>).
</p>
</div>
^^^

Question: We have a special name, here, for a certain kind of failure to defer to the greater good—for putting a personal sense of doing right above any objective measure of the outcome. It's called "moral vanity".
Answer:
^^^
<div>
<p>
  It's like a <span style="font-weight:bold">peacock</span> who thinks it looks so beautiful that it
  doesn't care about the other animals. We call this <span style="font-weight:bold">moral vanity</span>
  [<span style="font-style:italic">pride in one's own morality</span>].
</p>
</div>
^^^

Question: We've been half right about a lot of things, but there's something missing from our theories, something whose nature we haven't even guessed yet. If we don't learn to understand it, it will kill us.
Answer:
^^^
<div>
<p>
  It's like a <span style="font-weight:bold">mouse</span> who knows the
  way around the kitchen, but doesn't know about the
  <span style="font-weight:bold">cat</span>[
  <span style="font-style:italic">
    something whose nature we haven't even guessed yet
  </span>
  ]. If the mouse doesn't learn to understand the cat, it will get
  eaten.
</p>
</div>
^^^

Question:
`;

export default eli5Prompt;

// USAGE
// const question = "A function for creating text completions using openai";
// const _prompt = `${pythonProgramPrompt} ${question}\nAnswer:\n^^^`;
// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: _prompt,
//   max_tokens: 512,
//   temperature: 0,
//   stop: `^^^`,
// });

// Question: You know, in formal logic, an inconsistent set of axioms can be used to prove anything at all. Once you have a single contradiction, A and not A, there’s nothing you can’t derive from it.
// Answer:
// ^^^
// <div>
// <p>
//   It's like a <span style="font-weight:bold">monkey</span> who can climb
//   any tree, no matter how tall. In formal logic, an inconsistent set of
//   axioms [<span style="font-style:italic">A and not A</span>] can be
//   used to prove anything at all, just like the monkey can climb any
//   tree.
// </p>
// </div>
// ^^^

// 'He was a bridger. He created you to touch other cultures. He wanted you to reach as far as you could.'

// <p style = {{backgroundColor:"#c1c8e4"}}>
// A <b>bridger</b> is like a <b>monkey</b>. He builds bridges between trees so other monkeys can reach other trees and explore <b>[other cultures]</b> and learn as much as they can.
// </p>

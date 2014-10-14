---
title: NY and MA Curriculum Comparison
date: 2014-10-14 21:58 UTC
tags: HFOSS, Education
summary: "In HFOSS we just got our XO laptops with the intent that we make an educational game or tool to teach 4th graders math. In order to make sure we are actually teaching 4th graders relevant math and not just what I think is relevant (what fourth grader doesn't want to learn a little graph theory?), we're reviewing the teacher guidelines for two states math curricula: New York and Massachusetts."
---

## NY and MA 4th Grade Math Curriculum Comparison

In HFOSS we just got our XO laptops with the intent that we make an educational game or tool to teach 4th graders math. In order to make sure we are actually teaching 4th graders relevant math and not just what I think is relevant (what fourth grader doesn't want to learn a little graph theory?), we're reviewing the teacher guidelines for two states math curricula: New York and Massachusetts.

### How they're the same

They're the same in almost every way, so much so that I wondered if I wasn't just reading the same text formatted slightly differently. Being the computational linguist that I am I decided to stop reading the text and ran some similarity analysis on them.

First, before I did anything I did some basic text normalization. Tokenized the text into an array of sentence strings, then tokenized that into an array of words, before finally flattening the sentence array. I did this because the accuracy of the Punkt word tokenizer that I used is highly dependent on receiving sentences to give accurate results. I then stripped punctuation and non-ascii chracters.

That done, I ran the cosine similarity metric which works by breaking up the text into a list of tokens, which is than converted into a type frequency list to create a vector space model for each document. From these n-dimensional vectors (where n is len(types)) we can then treat the distance between them just as you would in two dimensions: with the Euclidean cosine rule. This distance is then normalized by the size of each vector to give a percentage. The result? 94.4% the same.

But what does that mean concretely? Well that's where the Levneshtein distance can come in. This metric use an edit distance model instead of a vector space one, what that means is it finds the smallest amount of edits it would take to transduce one string into another. These edits are at the character level: insertion, deletion, and substitution. This gives us a more absolute measure of similarity. In this case the number was 299 character edits (after normalization) on a text about 2,500 words long that is an insane number. Common Core is alive and well in NY and MA it would seem.

### How they're different

But neither of those metrics tell us what is different. For this I decided to go back to reading the text.

| Massachusetts | New York |
|:--------------|:---------|
| Header: Grade 4 | Header: Mathematics - Grade 4: Introduction |
| No mention of Standards of Mathematical Practice | Has a paragraph and a sidebar |
| Adds an MA.5a note in 4.NBT: multiplication and division skills through 12x12 | No such addition |
| Limits fraction domain to denominators of 2,3,4,5,6,8,10,12,100 | Makes no such limitation |

That was really all the differences I could spot, overall they are very minor differences between the two curricula.

## In what way could these be added to a game?

I still think that graph theory makes for the best games. Something with minimum spanning trees or map colouring could teach kids some of the more fun aspects of math besides just the rote memorization of multiplication tables or a page of long division problems. It might be possible to tie this in with the geometry section, but even that seems incredibly sparse to me.

I think some sort of Sudoku-like game could meet these requirements. I do like the idea of solving the order issue that Blocku has with Subtraction and Division, but looking at the source code, I'm not sure how I feel about that (hasn't been touched in several years, 2000 line python file that has all the logic it looks like, etc.)

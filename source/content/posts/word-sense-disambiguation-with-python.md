---
title: Word Sense Disambiguation with Python
date: 2014-10-13 01:48 UTC
tags: NLP, Python, Semantics

---

One of the first things you realize when working with any sort of linguistic data is just how ambiguous just about anything we say or write really is. From the smallest units of sound (what was that garbled bit of sound?) to the document unit of meaning (what was that article about?), there aren't many parts of language that we can be 100% sure of even as native speakers, much less as an outside observer, like our programs.

Nevertheless, we have solved a number of very difficult problems to a reasonable degree of accuracy with computational approaches. Today I'm going to talk about one of the more naive approaches to word sense disambiguation, which actually does fairly well when given a reasonably large input.

But first, what's this Word Sense Disambiguation all about. Well, a words sense can is a way of identifying how we use a given word by associating it with a *gloss*, which you can think of as it's definition. For example the sense in which I'm using the word sense according to WordNet (a corpus that keeps track of all this) is **sense.n.02**. That means the root word is sense, it's being used as a noun, and it is the second most common usage of the word. The gloss associated with this sense is:

> the meaning of a word or expression; the way in which a word or expression or situation can be interpreted

Other root words and part of speech are possible, for example another senses of this word is **common_sense.n.01** or **smell.v.05**. This is where the ambiguity problem comes in how does a computer know how to treat a given input when each one has a number of different senses, some of which have wildly different connotations and usages? This one problem is a key building block for all sorts of more complex, interesting NLP systems, from sentiment analysis to machine translation.

One simple approach to this problem is to use a tool like WordNet to lookup the various senses and compare their glosses and examples to the context that the word was found in. This technique is called the Simplified Lesk algorithm (simplified because he started out with a more complex probabilistic approach, but found that on smaller datasets this naive approach actually performs better!).

First things first import the magic that is going to help us on our task:

~~~
import nltk
from nltk.corpus import wordnet as wn
from nltk.corpus import stopwords
from nltk.tokenize import RegexpTokenizer
~~~

Next the main function, we'll save our results as we go in a dict called res/results. This outlines the 3 major steps in the algorithm:

1. Normalize the word into its root form
2. Query WordNet or some other resource to get the set of possible senses
3. Loop over these sense computing the overlap between their glosses and examples and our context.

~~~
def get_results(word, context):
    res = dict()
    res["word"] = word
    res["base"] = base_form_of(word)
    res["synsets"] = synsets_of(res["base"])
    res["best_sense"] = simple_lesk(res, context)
    print(res["best_sense"])
~~~

To get the normalized form we use NLTK's excellent built in tool, Morphy, which uses a sequence of rules to transform (or transduce) it to a root word. Next we use that base form to query WordNet for all possible senses.

~~~
def base_form_of(word):
    return wn.morphy(word)

def synsets_of(word):
    return wn.synsets(word)
~~~

Now onto the fun part: the Simplified Lesk. First we initialize the tokenizer we imported earlier with a regular expression that basically says to break up a given string into an array of consecutive (`+`) alphabetic characters (`\w`).

~~~
def simple_lesk(results, context):
    """
    Input: A previously computed results dict and a context list/set
    Returns: The sense from WordNet with the most overlap with the context,
             if there are none it defaults to the most common sense
    """
    tokenizer = RegexpTokenizer(r'\w+')
~~~

Next we initalize the best_sense variable to equal the first WordNet sense, that way if we don't get any hits we can default back to the most common sense. Same with overlap, we haven't compared anything yet so how would we know how much any given context overlaps?

~~~
    best_sense = results["synsets"][0]
    max_overlap = 0
~~~

Stopwords are usually function words (is, the, me, etc.) that hold a great deal of syntactic meaning, but aren't that helpful in semantic analysis. NLTK comes with a default set for English that has pretty good coverage, we then extend the list to include the words we're dealing with since that might influence the results unintentionally.

~~~
    stop_words = stopwords.words("english")
    stop_words.extend([results["base"], results["word"]])
~~~

Next we use the tokenizer and the list of stop words to generate a set of content tokens from the context using the python concept of list comprehensions.

~~~
    context = set(w.lower() for w in tokenizer.tokenize(context) \
                    if w.lower() not in stop_words)
~~~

Finally we loop over sense, grab its definition and any examples and tokenize that in the same way as with the context. We then compute the overlap between the two sets and keep track of which tallies up the most overlap as we go. Once it's all done we return the sense with the most results.

~~~
    for sense in results["synsets"]:
        signature = set()
        text = [ex for ex in sense.examples]
        text.append(sense.definition)

        signature = set(w.lower() for w in tokenizer.tokenize(" ".join(text)) \
                            if w.lower() not in stop_words)

        overlap = compute_overlap(signature, context)

        if overlap > max_overlap:
            max_overlap = overlap
            best_sense = sense

    return best_sense
~~~

But what about the compute_overlap bit, I hear you saying. Well that's simple, since we're dealing with sets that's as simple as taking the length (len()) of the *intersection* (&) between them.

~~~
def compute_overlap(signature, context):
    """
    Input: Two sets of types
    Returns: Length of the intersection of the two sets
    """
    return len(signature & context)
~~~

And that's it, while this might seem way to simple it actually works fairly well because there usually aren't a lot of senses and the distribution is heavily weighted towards the top (so our default state is right a large percentage of the time). If you want to see a complete working example (that also computes some other features like word similarity) check out the [full script](https://github.com/dropofwill/word-sense-disambiguation/blob/master/ps2_4_wordnetinfo.py).

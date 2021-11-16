# Lab 8 - Starter

1. Automated tests fit in this part of the pipeline: Within a Github action that runs whenever code is pushed. This makes the process more efficient and standardized. If done locally, it will be less standardized, and the test versions might be different per developer. There will also not be documentation on the shared repository. Additionally, testing incrementally instead of at the end allows problems to be more easily isolated and thus fixed. 

2. I would NOT use an E2E test to check if a function is returning the correct output. End to End tests are for the whole application, not for individual functions.

3. I would not use a unit test to test the "message" feature. Unit testing is for individual actions, but sending a message involves writing, delivering, and receiving a message, which would be better served by multiple different unit tests.

4. I would use a unit test to test the max message length feature of a messaging application. It is one encapsulated part of the application, and it only involves one function, so it is a good fit for unit testing.

# Project-1
PROBLEM STATEMENT:
 Airports often face challenges in managing a single runway for both landings and takeoffs. It becomes 
 essential to prioritize certain requests, especially landings, due to safety regulations and fuel 
 constraints

Queue (FIFO):
Purpose: Handles regular (non-critical) flight requests for landing and takeoff.

Characteristics: First-In-First-Out (FIFO) structure, meaning the first request 
received will be processed first.

Functionality: All regular requests are handled based on the order they were 
received.

Stack (LIFO):
Purpose: Manages critical landing requests (e.g., emergencies like low fuel).

Characteristics: Last-In-First-Out (LIFO) structure, meaning the most recent critical 
request will be handled first.

Functionality: Allows the most urgent critical request to be addressed immediately, 
bypassing regular queue requests

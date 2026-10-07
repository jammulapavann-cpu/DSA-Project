# Symptom-to-Diagnosis Matcher Website

Frontend website for the DSA-3 project "Symptom-to-Diagnosis Matcher".

## Run
No installation is required.

1. Open the folder in VS Code.
2. Open `index.html` in a browser.
3. Or install the VS Code Live Server extension and click **Go Live**.

## Files
- index.html — website structure
- login.html — demo login screen
- signup.html — demo account creation screen
- dashboard.html — signed-in activity dashboard
- profile.html — local user profile and logout
- style.css — responsive styling and dark mode
- script.js — authentication demo, symptom normalization, scoring, ranking, results and history

## Demo account flow
Open `signup.html` to create a local demo account, then use the dashboard to start analyses. Account and analysis history are stored in the browser's `localStorage` only; this is not production authentication and no real medical information should be entered.

## Project alignment
The website follows the submitted project flow:
User input -> normalize symptoms -> structured symptom set -> knowledge base -> match patterns -> calculate scores -> rank candidates -> display explainable results.

## Application flow
Login / Signup -> Dashboard -> Check Symptoms -> Results -> Profile / Logout.
The dashboard includes shortcuts for previous results and an About Project overview.

The current frontend uses JavaScript for demonstration. The final college version can connect this UI to the Java backend so the DSA implementation is actually executed by the server.

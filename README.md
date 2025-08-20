# CS 465 Full Stack Development – Module Eight Journal

## Architecture
In this project, we worked with two distinct frontend approaches.  
The **Express app_server** used traditional server-side rendering. Express served HTML pages (often with Handlebars templates) where each navigation or major action triggered a full page reload. While simple and reliable, this approach can feel slower because the server generates new HTML for every request.

On the other hand, the **Angular Single-Page Application (SPA)** in `client/travlr-admin` followed a very different model. The SPA loads once in the browser, and all further interactions happen dynamically through JavaScript. Angular uses RESTful API calls to communicate with the backend, updating the UI without reloading the page. This approach feels smoother, more interactive, and closer to a desktop application, although the initial load is heavier.

For the database, the backend used **MongoDB**, a NoSQL solution. Its flexible, JSON-like structure is well suited to projects that evolve quickly. Unlike rigid relational schemas, MongoDB allows data models to adapt over time. It’s also highly scalable, making it a strong choice for applications that may need to handle large or varied data sets.

---

## Functionality
JSON (JavaScript Object Notation) is often confused with JavaScript, but they are different. **JavaScript** is a full programming language with logic, control flow, and DOM manipulation. **JSON** is simply a lightweight data format made of key-value pairs, designed for exchanging information.  

JSON is what ties the frontend and backend together. When Angular requests trip data, Express queries MongoDB, formats the results as JSON, and sends it back. Angular parses that JSON into objects and updates the UI. Likewise, when the user submits new data (like adding a trip), Angular sends JSON to the backend, which parses and saves it to the database. This shared format makes seamless communication possible.

During development, one big refactor was centralizing data handling in Angular. Instead of every component making its own API calls, the logic was moved into dedicated services like `trip-data.service.ts`. This eliminated duplication, simplified error handling, and made future updates easier.  

Reusable UI components were another major improvement. For example, creating a `trip-card.component.ts` allowed all trips to be displayed consistently without rewriting code. Benefits included:
- **Reusability:** One component, many uses.  
- **Maintainability:** Fixes and updates in one place.  
- **Consistency:** A uniform look and feel across the app.  
- **Faster development:** Quicker assembly of new features.  
- **Testability:** Easier to test isolated components.

---

## Testing
In a full-stack application, testing involves HTTP methods, API endpoints, and security layers.

**Methods:**  
- `GET` retrieves data (e.g., `GET /api/trips`).  
- `POST` creates data (e.g., `POST /api/trips`).  
- `PUT` replaces an existing resource.  
- `PATCH` partially updates a resource.  
- `DELETE` removes a resource.

**Endpoints:** These are specific URLs for resources. For example, `/api/trips` handles all trips, while `/api/trips/:id` targets a single trip. Each endpoint works with one or more methods depending on the action.

**Security:** The project used JWT (JSON Web Token) authentication. After logging in, users receive a token which is attached to subsequent requests. Security adds complexity to testing because we must verify:
- Unauthenticated requests fail where expected.  
- Tokens are valid, expire correctly, and cannot be forged.  
- Authorized users can perform allowed actions, while unauthorized users cannot.  
- Inputs are validated to prevent malicious behavior.  

API testing, therefore, isn’t just about getting the right data back—it’s also about ensuring proper security, permissions, and robustness against invalid or hostile input.

---

## Reflection
This course has been a major step in building my skills as a full-stack developer. I’ve gained hands-on experience with Express, Angular, MongoDB, and RESTful APIs, which together make up a professional-grade stack.  

Beyond the technical knowledge, I’ve learned best practices in structuring projects, using services for efficiency, and securing applications with authentication. These are skills that employers value, and they directly increase my marketability in the software development field.  

I also developed confidence in debugging, refactoring, and testing—skills that will carry over into any project. Overall, this course not only helped me complete a working application but also gave me the tools to continue growing as a developer and problem-solver.

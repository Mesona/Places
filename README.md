# PLACES

[Live demo](http://www.places.mesona.net/#/)


## Features

* Create public or private Places

* Create, update, delete Pages within Places

* View public Places

* Switch privacy options on Places

* Filter Places by different criteria


### Main Page

The main page displays, by default, all publicly viewable Places.  This is done by creating a component that is rendered for each item within the Place database.  But once a user logs in, they can filter Places between a few different options.  This is accomplished by three pieces of code.

The first piece of code is a dropdown that calls `updateIndex()`.  The main page defaults to showing `allPlaces` but allows the other filters to be selected. 
```jsx
<div className="places-sort-button">{this.state.currentDisplay}
  { this.state.displayMenu ? (
    <ul>
      <li onClick={(e) => this.updateIndex('allPlaces')}>Owned by anyone</li>
      <li onClick={(e) => this.updateIndex('myPlaces')}>Owned by me</li>
      <li onClick={(e) => this.updateIndex('otherPlaces')}>Not owned by me</li>
    </ul>
  ) : (
    null
  )}
</div>
```

The second piece of code is a simple switch statement that is passed in the change, and makes the state updates accordingly. 

```jsx
updateIndex(target) {
  switch (target) {
    case 'allPlaces':
      this.state.currentDisplay = 'Owned by anyone';
      this.state.placeSelection = this.state.allPlaces;
      break;
    case 'myPlaces':
      this.state.currentDisplay = 'Owned by me';
      this.state.placeSelection = this.props.myPlaces;
      break;
    case 'otherPlaces':
      this.state.currentDisplay = 'Not owned by me';
      this.state.placeSelection = this.props.otherPlaces;
      break;
  }
}
```

The final piece to this is the actual rendering of the component.

```jsx
<section className="places">
  {(
    this.state.placeSelection === '' && this.state.allPlaces !== undefined ?
      this.state.allPlaces : this.state.placeSelection).map(place => <PlaceIndexItemContainer
        key={place.id}
        place={place}
        monthNames={monthNames}
      />
  )}
</section>
```


A fun piece of CSS styling I like can be seen here, or viewed on the Login/Signup pages:

Moving Placeholder Text:
![moving placeholder text](https://github.com/Mesona/Places/blob/master/app/assets/javascripts/images/readme/movings_placeholder_text.png "moving placeholder text")

This was accomplished by setting text that mimics the standard placeholder text, because actual placeholder text cannot be moved outside of its input field.  The span field reads from the state to see if a `.placeholderText` styling should be applied, but is otherwise just text.

```jsx
<section className="descriptor-div">
  <span  className={this.state.active === 'password' ? 'placeholderText' : this.state.password === '' ? '' : 'hidden'}>Password</span>
</section>
```

The input itself has an `onClick` handler to set the currently active state.

```jsx
<input
  type="text"
  value={this.state.email}
  onChange={this.handleInput('email')}
  onClick={()=>{this.setState({active: 'email'})}}
/>
```

And this is the CSS that moves the fake placeholder text into the top left section of the input field.

```css
.placeholderText {
  position: relative;
  top: -24px;
  font-size: 14px;
  color: #2276E4;
  background: white;
  padding: 3px;
}
```

One final feature that I think is pretty cool is the subpage indentation.

First, I generate a list of all the topmost Pages within a Place:
`const topPages = allPages.filter((e) => e.parent_page_id === null);`

From there, I render a component:
```jsx
{topPages.map(page => <PageIndexItemContainer
  key={page.id}
  pageId = {page.id}
  title={page.title}
  page={page}
  placeId = {placeId}
  firstPage = {this.props.firstPage}
  src={page.id === firstPage.id ? window.images.homeIcon : window.images.headerImg}
  classTitle="page-index-items"
/>)}
```

And within that component, I make a check to see if the page has any children:
`const children = this.props.page === undefined ? '' : this.props.page.children;`

And then if children isn't empty, I render yet another component:

```jsx
{ children !== undefined && children !== '' ?
  <li style={styles}>
    {children.map(page =>
      <PageIndexItemContainer
        key={page.id}
        pageId = {page.id}
        title={page.title}
        page={getState().entities.pages[page.id]}
        placeId = {placeId}
        src={ window.images.headerImg }
        firstPage = {this.props.firstPage}
        classTitle="page-index-items subpage-index-items"
      />)}
  </li>: null
}
```

But the key to making it all work was the `style={styles}` attribute on the li.  I initially tried adding some props down to each component and doing some math like `margin: 15 * ${someVariable}`, but nothing I was trying working.  Ultimately, it was as simple as this, to properly indent the subpages:
```jsx
let styles = {
  margin: `15px`,
};
```

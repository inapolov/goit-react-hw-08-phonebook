"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[486],{2486:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(885),r=n(2791),s=n(8242),c={form:"Form_form__e1yzW",label:"Form_label__8nx+5",button:"Form_button__8NOIT"},i=n(184);var o=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],o=t[1],l=(0,r.useState)(""),u=(0,a.Z)(l,2),d=u[0],m=u[1],h=(0,s.Jx)().data,f=(0,s.Lr)(),_=(0,a.Z)(f,2),x=_[0],b=_[1].isLoading,p=function(){o(""),m("")};return(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:n,number:d};h.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):(x(t),p())},className:c.form,children:[(0,i.jsxs)("label",{className:c.label,children:["Name",(0,i.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:function(e){o(e.currentTarget.value)},className:c.input})]}),(0,i.jsxs)("label",{className:c.label,children:["Number",(0,i.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:function(e){m(e.currentTarget.value)},className:c.input})]}),(0,i.jsx)("button",{type:"submit",className:c.button,disabled:b,children:"Add contact"})]})},l=n(5048),u="ContactItem_item__gxreB",d="ContactItem_contact__C4k7V";var m=function(e){var t=e.contact,n=(0,s.Nt)(),r=(0,a.Z)(n,2),c=r[0],o=r[1].isLoading;return(0,i.jsxs)("div",{className:u,children:[(0,i.jsxs)("p",{className:d,children:[t.name,": ",t.phone]}),(0,i.jsx)("button",{onClick:function(){c(t.id)},disabled:o,children:o?"Deleting":"Delete"})]})},h=n(4869),f="ContactList_list__csErn";var _=function(){var e=(0,s.Jx)(),t=e.data,n=e.isFetching,a=(0,l.v9)((function(e){return e.filter.value})),r=function(){if(t)return t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))}();return(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsx)(h.Z,{}),t&&(0,i.jsx)("ul",{className:f,children:r.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(m,{contact:e})},e.id)}))})]})},x=n(6895),b="Filter_label__vEd1E";var p=function(){var e=(0,l.I0)(),t=(0,l.v9)((function(e){return e.filter.value}));return(0,i.jsxs)("label",{className:b,children:["Find contacts by name",(0,i.jsx)("input",{type:"text",value:t,onChange:function(t){e((0,x.t)(t.currentTarget.value))}})]})},v="Contactspage_title__t4Dx6";var j=function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{className:v,children:"Phonebook"}),(0,i.jsx)(o,{}),(0,i.jsx)("h2",{className:v,children:"Contacts"}),(0,i.jsx)(p,{}),(0,i.jsx)(_,{})]})}}}]);
//# sourceMappingURL=486.19e65d06.chunk.js.map
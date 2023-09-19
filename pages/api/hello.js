// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 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
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// https://templates.hibootstrap.com/baxo/default/index.html
// https://jellywp.com/html/sprasa-preview/index.html
// https://www.apollographql.com/blog/apollo-client/how-to-use-apollo-client-with-next-js-13/https://www.apollographql.com/blog/apollo-client/how-to-use-apollo-client-with-next-js-13/
// https://www.codeofaninja.com/display-instagram-feed-website/
// https://stackoverflow.com/questions/3985214/retrieve-only-the-queried-element-in-an-object-array-in-mongodb-collection







db.collection.find({
  shapes: {
    $elemMatch: {
      color: "red"
    }
  }
},
  {
    "shapes.$": -1
  },
)



db.collection.aggregate({
  $match: {
    "shapes.color": "blue"
  }
},
  {
    "$project": {
      shapes: {
        $filter: {
          input: "$shapes",
          as: "item",
          cond: {
            $eq: [
              "$$item.color",
              "blue"
            ]
          }
        }
      }
    }
  })


db.collection.aggregate({
  "$project": {
    shapes: {
      $filter: {
        input: "$shapes",
        as: "item",
        cond: {
          $eq: [
            "$$item.color",
            "blue"
          ]
        }
      }
    }
  }
})
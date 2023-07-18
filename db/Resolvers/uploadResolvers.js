// import { GraphQLBoolean, GraphQLObjectType, GraphQLSchema } from "graphql";
// import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs"
import { GraphQLUpload } from "graphql-upload-minimal";
const fs = require('fs')
//import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';



// import { GraphQLUpload } from "@types/graphql-upload";
//  import { GraphQLUpload } from 'apollo-upload-server';
/* import { GraphQLUpload } from "@/node_modules/graphql-upload/GraphQLUpload.mjs" */

const uploadResolver = {

    Upload: GraphQLUpload,

    Mutation: {
        // https://stackoverflow.com/questions/64971480/cant-upload-files-with-apollo-client-graphql-in-next-js-app-post-body-missing
        singleUpload: async (_, args) => {
            console.log(args);
            const { createReadStream, filename, mimetype, encoding } = await args;
            console.log('attachment:', filename, mimetype, encoding);
            // return args.file.then(file => {
            //     const { createReadStream, filename, mimetype } = file

            const stream = createReadStream();

            // This is purely for demonstration purposes and will overwrite the
            // local-file-output.txt in the current working directory on EACH upload.
            const out = require('fs').createWriteStream('local-file-output.txt');
            stream.pipe(out);
            await finished(out);

            return { filename, mimetype, encoding };


            // });
        }
    },

};

module.exports = uploadResolver;

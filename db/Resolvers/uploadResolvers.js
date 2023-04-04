// import { GraphQLUpload } from "@types/graphql-upload";

const uploadResolver = {
    upload: GraphQLUpload,

    Mutation: {
        singleUpload: async (_, file) => {

            console.log("upload files: ", file)
            // const { createReadStream, filename, mimetype, encoding } = await file;
            // C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/
        }
    }
};

module.exports = uploadResolver;

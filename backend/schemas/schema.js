// First, we must import the schema creator
// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import post from './documents/post';
import project from './documents/project';
import author from './documents/author';
import category from './documents/category';
import technology from './documents/technology';
import portableText from './objects/portableText';
import figure from './objects/figure';
import excerptPortableText from './objects/excerptPortableText';
import logo from './objects/logo';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    project,
    technology,
    category,
    author,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    portableText,
    excerptPortableText,
    figure,
    logo,
  ]),
});

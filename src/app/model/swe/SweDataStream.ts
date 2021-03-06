
import { AbstractSWEIdentifiable } from './AbstractSWEIdentifiable';
import { EncodedValues } from './EncodedValues';
import { AbstractDataComponent } from './AbstractDataComponent';
import { SweCount } from './SweCount';
import { SweEncoding } from './SweEncoding';
import { SweElementType } from './SweElementType';

/**
 * Defines the structure of the element that will be repeated in the stream
 */
export class SweDataStream extends AbstractSWEIdentifiable {
  /**
   * Number of elements of the defined type that the stream contains
   */
  elementCount: SweCount[];
  /**
   * Definition and structure of one stream element
   */
  elementType: SweElementType;
  /**
   * Method used to encode the stream values
   */
  encoding: SweEncoding;
  /**
   * Encoded values for the stream (can be out of band)
   */
  values: EncodedValues;
}

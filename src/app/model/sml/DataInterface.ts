import { AbstractSWEIdentifiable } from '../swe/AbstractSWEIdentifiable';
import { SweDataStream } from '../swe/SweDataStream';
import { SweDataRecord } from '../swe/SweDataRecord';

/**
 * The DataInterface description provides information sufficient for
 * "plug-and-play" access to and parsing of the data stream or file at the
 * particular IO port.
 */
export class DataInterface extends AbstractSWEIdentifiable {
  /**
   * The definition of the digital data components and encoding accessed
   * through the data interface.
   */
  data: SweDataStream;
  /**
   * A set of property values that define the type and configuration of a data
   * interface (e.g. the port settings of an RS232 interface).
   */
  interfaceParameters: SweDataRecord;
}

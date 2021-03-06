/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ListBranchesErrorModel.
 */
class ListBranchesErrorModel {
  /**
   * Create a ListBranchesErrorModel.
   * @property {string} id
   * @property {string} code
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListBranchesErrorModel
   *
   * @returns {object} metadata of ListBranchesErrorModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListBranchesErrorModel',
      type: {
        name: 'Composite',
        className: 'ListBranchesErrorModel',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          code: {
            required: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListBranchesErrorModel;

/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The repository which is accessiable by GitHub App Installation
 *
 */
class GitHubInstallationRepository {
  /**
   * Create a GitHubInstallationRepository.
   * @member {string} [name] The repository name
   * @member {string} [description] The discription of repository
   * @member {string} [cloneUrl] URL used to clone the repository
   * @member {string} [defaultBranch] The default branch for the repo
   * @member {string} [language] The language in the repository
   * @member {string} [updatedAt] The repository updated time
   * @member {boolean} [fork] Whether the repository is a fork
   */
  constructor() {
  }

  /**
   * Defines the metadata of GitHubInstallationRepository
   *
   * @returns {object} metadata of GitHubInstallationRepository
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GitHubInstallationRepository',
      type: {
        name: 'Composite',
        className: 'GitHubInstallationRepository',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          cloneUrl: {
            required: false,
            serializedName: 'clone_url',
            type: {
              name: 'String'
            }
          },
          defaultBranch: {
            required: false,
            serializedName: 'default_branch',
            type: {
              name: 'String'
            }
          },
          language: {
            required: false,
            serializedName: 'language',
            type: {
              name: 'String'
            }
          },
          updatedAt: {
            required: false,
            serializedName: 'updated_at',
            type: {
              name: 'String'
            }
          },
          fork: {
            required: false,
            serializedName: 'fork',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = GitHubInstallationRepository;
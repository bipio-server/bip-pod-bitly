/**
 *
 * The Bipio Bitly Pod
 * ---------------------------------------------------------------
 *
 * @author Michael Pearson <michael@cloudspark.com.au>
 * Copyright (c) 2010-2013 CloudSpark pty ltd http://www.cloudspark.com.au
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function Shorten(podConfig) {
  this.name = 'shorten';
  this.description = "Shortens a URL";
  this.description_long = "Given a long URL, returns a bitly short URL";
  this.trigger = false;
  this.singleton = true;
  this.auto = true;
  this.podConfig = podConfig;
}

Shorten.prototype = {};

Shorten.prototype.getSchema = function() {
  return {
    'imports' : {
      properties : {
        'url' : {
          type : 'string',
          description : 'URL'
        }        
      }
    },
    'exports' : {
      properties : {
        'new_hash' : {
          type : 'string',
          description : '1 if new hash'
        },
        'url' : {
          type : 'string',
          description : 'Bitly URL'
        },
        'hash' : {
          type : 'string',
          description : 'Account URL Hash'
        },
        'global_hash' : {
          type : 'string',
          description : 'Global Hash'
        },
        'long_url' : {
          type : 'string',
          description : 'Source URL'
        }
      }
    }
  }
}

Shorten.prototype.invoke = function(imports, channel, sysImports, contentParts, next) {
  var uri = 'https://api-ssl.bitly.com/v3/link/lookup?url=';

  if (imports.url && '' !== imports.url) {
    uri += imports.url + '&access_token=' + sysImports.auth.oauth.token;
    pod._httpGet(uri, function(err, bodyJSON) {
      next(err || bodyJSON.status_code !== 200, bodyJSON.data);
    });
  }    
}

// -----------------------------------------------------------------------------
module.exports = Shorten;
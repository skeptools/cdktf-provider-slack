// https://www.terraform.io/docs/providers/slack/d/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSlackUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#id DataSlackUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_type DataSlackUser#query_type}
  */
  readonly queryType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_value DataSlackUser#query_value}
  */
  readonly queryValue: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/d/user slack_user}
*/
export class DataSlackUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "slack_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/slack/d/user slack_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSlackUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataSlackUserConfig) {
    super(scope, id, {
      terraformResourceType: 'slack_user',
      terraformGeneratorMetadata: {
        providerName: 'slack',
        providerVersion: '0.9.0',
        providerVersionConstraint: '~> 0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._queryType = config.queryType;
    this._queryValue = config.queryValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // has_2fa - computed: true, optional: false, required: false
  public get has2Fa() {
    return this.getBooleanAttribute('has_2fa');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_admin - computed: true, optional: false, required: false
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }

  // is_bot - computed: true, optional: false, required: false
  public get isBot() {
    return this.getBooleanAttribute('is_bot');
  }

  // is_owner - computed: true, optional: false, required: false
  public get isOwner() {
    return this.getBooleanAttribute('is_owner');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // query_value - computed: false, optional: false, required: true
  private _queryValue?: string; 
  public get queryValue() {
    return this.getStringAttribute('query_value');
  }
  public set queryValue(value: string) {
    this._queryValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryValueInput() {
    return this._queryValue;
  }

  // real_name - computed: true, optional: false, required: false
  public get realName() {
    return this.getStringAttribute('real_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      query_type: cdktf.stringToTerraform(this._queryType),
      query_value: cdktf.stringToTerraform(this._queryValue),
    };
  }
}
